interface TestBoxProps {
  type: 'A' | 'B' | 'C';
}

const TestBox = ({ type }: TestBoxProps) => {
  const typeToColor: { [K in TestBoxProps['type']]: string } = {
    A: 'bg-red-300',
    B: 'bg-blue-300',
    C: 'bg-green-300',
  };

  return <div className={`${typeToColor[type]} w-[100px] h-[100px]`} />;
};

export default TestBox;
