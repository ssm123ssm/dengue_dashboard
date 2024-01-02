"use client";

interface Props {
  rating: number;
  def?: boolean;
}
const RatingProgress = ({ rating = 0, def = false }) => {
  const getColor = () => {
    const breakpoints = [10, 40, 50, 80, 100, 150];
    const colors = [
      "red-600",
      "rose-700",
      "light-blue-600",
      "green-500",
      "green-600",
      "green-800",
    ];

    if (def) {
      return "light-blue-600";
    }

    const breakpoint = breakpoints.findIndex(
      (x: number, currentIndex: number) => {
        return (
          x >= rating &&
          (rating > breakpoints[currentIndex - 1] || currentIndex === 0)
        );
      }
    );

    return colors[breakpoint];
  };

  return (
    <div className="flex flex-row items-center rounded-lg overflow-hidden">
      <div
        className={
          "bg-gray-200 mr-2 h-2 rounded-lg flex overflow-hidden flex " +
          (def ? "w-20" : "w-full")
        }
      >
        <div className={"bg-" + getColor()} style={{ width: rating + "%" }} />
      </div>
      <span className="font-medium">{rating}</span>
    </div>
  );
};

export default RatingProgress;
