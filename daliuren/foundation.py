"""Fixed Earth plate, month-general shift, and four lessons.

Scope: the printed foundation and worked examples in Bei Hai Xian Ren's
Liuren Jinzhen, vol. 1, pp. 10-14 and 46-47 (physical printing unverified).
No sexagenary-date calculation, transmissions, generals or divination here.
"""

from dataclasses import dataclass

BRANCHES = ("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥")
STEM_LODGINGS = {
    "甲": "寅", "乙": "辰", "丙": "巳", "丁": "未", "戊": "巳",
    "己": "未", "庚": "申", "辛": "戌", "壬": "亥", "癸": "丑",
}


def _branch_index(branch: str) -> int:
    try:
        return BRANCHES.index(branch)
    except ValueError as exc:
        raise ValueError(f"Unknown earthly branch: {branch!r}") from exc


@dataclass(frozen=True)
class Plate:
    """A bijection from each fixed Earth-plate branch to a Heaven branch."""

    month_general: str
    chosen_hour: str
    offset: int

    def heaven_on(self, earth_branch: str) -> str:
        return BRANCHES[(_branch_index(earth_branch) + self.offset) % 12]

    def earth_under(self, heaven_branch: str) -> str:
        return BRANCHES[(_branch_index(heaven_branch) - self.offset) % 12]

    def pairs(self) -> tuple[tuple[str, str], ...]:
        """Twelve (fixed-Earth-branch, Heaven-branch) pairs in branch order."""
        return tuple((earth, self.heaven_on(earth)) for earth in BRANCHES)


@dataclass(frozen=True)
class Lesson:
    """Logical lesson index, upper Heaven branch, and explicit lower source."""

    number: int
    upper_branch: str
    lower_display: str
    source_earth_branch: str


def make_plate(month_general: str, chosen_hour: str) -> Plate:
    """Place the month-general Heaven branch above the chosen-hour Earth palace.

    Both arguments are already-selected branch symbols. Civil-time and
    month-general boundary conventions are intentionally out of scope.
    """
    offset = (_branch_index(month_general) - _branch_index(chosen_hour)) % 12
    return Plate(month_general, chosen_hour, offset)


def build_four_lessons(day_stem: str, day_branch: str, plate: Plate) -> tuple[Lesson, ...]:
    """Return logical lessons 1..4; traditional printed columns may run right-to-left."""
    if day_stem not in STEM_LODGINGS:
        raise ValueError(f"Unknown heavenly stem: {day_stem!r}")
    _branch_index(day_branch)
    palace = STEM_LODGINGS[day_stem]
    stem_upper = plate.heaven_on(palace)
    stem_second = plate.heaven_on(stem_upper)
    branch_upper = plate.heaven_on(day_branch)
    branch_second = plate.heaven_on(branch_upper)
    return (
        Lesson(1, stem_upper, day_stem, palace),
        Lesson(2, stem_second, stem_upper, stem_upper),
        Lesson(3, branch_upper, day_branch, day_branch),
        Lesson(4, branch_second, branch_upper, branch_upper),
    )
