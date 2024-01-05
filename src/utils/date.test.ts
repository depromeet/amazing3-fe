import { isLargerThanToday, isValidDate } from './date';

describe('isValidDate', () => {
  it('should return true for valid dates', () => {
    expect(isValidDate('2022', '01', '01')).toBe(true);
    expect(isValidDate('2022', '12', '31')).toBe(true);
    expect(isValidDate('2024', '02', '29')).toBe(true); // Leap year
  });

  it('should return false for invalid dates', () => {
    expect(isValidDate('2022', '02', '29')).toBe(false); // Not a leap year
    expect(isValidDate('2022', '04', '31')).toBe(false); // April has 30 days
    expect(isValidDate('2022', '13', '01')).toBe(false); // There is no 13th month
  });

  it('should return false for dates with invalid format', () => {
    expect(isValidDate('2022', '00', '01')).toBe(false); // There is no 0th month
  });
});

describe('isLargerThanToday', () => {
  // Mock the current date to a constant value
  beforeAll(() => {
    const currentDate = new Date('2024-01-01T00:00:00.000');
    const RealDate = Date;
    jest.spyOn(global, 'Date').mockImplementation((...args) => (args.length ? new RealDate(...args) : currentDate));
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return true for dates larger than today', () => {
    expect(isLargerThanToday('2024', '01')).toBe(true);
    expect(isLargerThanToday('2024', '12')).toBe(true);
  });

  it('should return false for dates not larger than today', () => {
    expect(isLargerThanToday('2023', '01')).toBe(false);
    expect(isLargerThanToday('2023', '12')).toBe(false); // 2024-01-01 00:00 should not be included.
  });
});
