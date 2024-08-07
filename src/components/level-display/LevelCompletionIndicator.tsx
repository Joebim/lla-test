interface LevelCompletionIndicatorProperties {
  isCompleted: boolean;
}

const LevelCompletionIndicator: React.FC<
  LevelCompletionIndicatorProperties
> = ({ isCompleted }) => {
  return (
    <div
      data-testid={isCompleted ? "completed-indicator" : "incomplete-indicator"}
      className="relative flex h-2 w-4 items-center justify-center rounded-full border-[0.5px] border-[#FE5900] bg-black"
    >
      {isCompleted && (
        <div className="absolute h-[65%] w-[85%] rounded-full bg-[#FE6A19] shadow-[inset_0px_1px_3px_0px_#FE7C32,inset_0px_-1px_3px_0px_#674537]"></div>
      )}
    </div>
  );
};

export default LevelCompletionIndicator;
