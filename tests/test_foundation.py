"""Human-checkable chart-position test vectors (not divination validation)."""

import unittest

from daliuren.foundation import BRANCHES, build_four_lessons, make_plate


class PlateTests(unittest.TestCase):
    def test_all_144_month_general_and_hour_pairs_form_bijections(self):
        for month_general in BRANCHES:
            for chosen_hour in BRANCHES:
                with self.subTest(month_general=month_general, chosen_hour=chosen_hour):
                    plate = make_plate(month_general, chosen_hour)
                    self.assertEqual(plate.heaven_on(chosen_hour), month_general)
                    pairs = plate.pairs()
                    self.assertEqual(len(pairs), 12)
                    self.assertEqual({h for _, h in pairs}, set(BRANCHES))
                    for earth, heaven in pairs:
                        self.assertEqual(plate.earth_under(heaven), earth)

    def test_same_and_opposite_branches_are_shifts_zero_and_six(self):
        for i, hour in enumerate(BRANCHES):
            self.assertEqual(make_plate(hour, hour).offset, 0)
            opposite = BRANCHES[(i + 6) % 12]
            self.assertEqual(make_plate(opposite, hour).offset, 6)

    def test_p43_location_drills(self):
        first = make_plate("亥", "午")
        self.assertEqual(tuple(first.heaven_on(x) for x in "申辰子未"), ("丑", "酉", "巳", "子"))
        second = make_plate("未", "酉")
        self.assertEqual(tuple(second.earth_under(x) for x in "午申亥卯"), ("申", "戌", "丑", "巳"))

    def test_invalid_branches_are_rejected(self):
        with self.assertRaises(ValueError):
            make_plate("天", "子")
        with self.assertRaises(ValueError):
            make_plate("子", "地")


class FourLessonsTests(unittest.TestCase):
    @staticmethod
    def values(stem, branch, general, hour):
        lessons = build_four_lessons(stem, branch, make_plate(general, hour))
        return tuple((lesson.upper_branch, lesson.lower_display) for lesson in lessons)

    def test_p12_to_p14_gengzi_example(self):
        self.assertEqual(self.values("庚", "子", "卯", "辰"),
                         (("未", "庚"), ("午", "未"), ("亥", "子"), ("戌", "亥")))

    def test_p33_to_p35_dinghai_example(self):
        self.assertEqual(self.values("丁", "亥", "戌", "巳"),
                         (("子", "丁"), ("巳", "子"), ("辰", "亥"), ("酉", "辰")))

    def test_p46_to_p47_jiawu_example(self):
        lessons = build_four_lessons("甲", "午", make_plate("丑", "戌"))
        self.assertEqual(tuple((x.upper_branch, x.lower_display) for x in lessons),
                         (("巳", "甲"), ("申", "巳"), ("酉", "午"), ("子", "酉")))
        self.assertEqual(lessons[0].source_earth_branch, "寅")
        self.assertEqual(make_plate("丑", "戌").offset, 3)

    def test_invalid_stem_and_day_branch(self):
        p = make_plate("子", "子")
        with self.assertRaises(ValueError):
            build_four_lessons("子", "子", p)
        with self.assertRaises(ValueError):
            build_four_lessons("甲", "甲", p)


if __name__ == "__main__":
    unittest.main()
