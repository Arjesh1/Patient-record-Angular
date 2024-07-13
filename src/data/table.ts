export type TableHeader = {
  [id: string]: Header;
};

export type Header = { name: string } & (
  | {
      uiType: 'text' | 'input';
    }
  | {
      uiType: 'dateTime';
      format: 'dd/MM/YYYY' | 'dd/MM/YYYY hh:mm';
    }
  | {
      uiType: 'dropdown';
      options: {
        value: number;
        displayText: string;
      }[];
    }
);

export type Row = {
  [id: string]: string | number;
};

export type TableData = {
  header: TableHeader;
  rows: Row[];
};

export const tableData: TableData = {
  header: {
    1: { name: 'First Name', uiType: 'text' },
    2: { name: 'Last Name', uiType: 'text' },
    3: {
      name: 'Blood Types',
      uiType: 'dropdown',
      options: [
        { displayText: 'A', value: 1 },
        { displayText: 'B', value: 2 },
        { displayText: 'AB', value: 3 },
        { displayText: 'O', value: 4 },
      ],
    },
    4: { name: 'Medicare Number', uiType: 'text' },
    5: { name: 'dob', uiType: 'dateTime', format: 'dd/MM/YYYY' },
    6: {
      name: 'Admission reason',
      uiType: 'dropdown',
      options: [
        { displayText: 'Cardiovascular', value: 1 },
        { displayText: 'Diabetes', value: 2 },
      ],
    },
    7: {
      name: 'Admission time',
      uiType: 'dateTime',
      format: 'dd/MM/YYYY hh:mm',
    },
    8: {
      name: 'Note',
      uiType: 'input',
    },
  },
  rows: [
    {
      1: 'John',
      2: 'Doe',
      3: 1,
      4: '123456789',
      5: '1990-05-15',
      6: 1,
      7: '2024-07-03 10:15',
      8: 'Patient has allergies to penicillin.',
    },
    {
      1: 'Jane',
      2: 'Smith',
      3: 2,
      4: '987654321',
      5: '1980-12-28',
      6: 2,
      7: '2024-07-03 08:30',
      8: 'Follow-up appointment scheduled for next month.',
    },
    {
      1: 'Michael',
      2: 'Johnson',
      3: 3,
      4: '456789123',
      5: '1995-08-20',
      6: 1,
      7: '2024-07-03 14:00',
      8: 'Patient requires regular monitoring of blood pressure.',
    },
    {
      1: 'Emily',
      2: 'Brown',
      3: 4,
      4: '789456123',
      5: '1974-03-10',
      6: 2,
      7: '2024-07-03 12:45',
      8: 'No known allergies.',
    },
    {
      1: 'Daniel',
      2: 'Lee',
      3: 1,
      4: '654321987',
      5: '1988-11-02',
      6: 1,
      7: '2024-07-03 11:20',
      8: 'Patient is a smoker.',
    },
    {
      1: 'Sarah',
      2: 'Taylor',
      3: 2,
      4: '321654987',
      5: '1982-09-17',
      6: 2,
      7: '2024-07-03 09:55',
      8: 'Needs prescription refill for insulin.',
    },
    {
      1: 'David',
      2: 'Martinez',
      3: 3,
      4: '234567891',
      5: '1969-07-05',
      6: 1,
      7: '2024-07-03 16:30',
      8: 'Patient is allergic to shellfish.',
    },
    {
      1: 'Olivia',
      2: 'Garcia',
      3: 4,
      4: '891234567',
      5: '1993-01-25',
      6: 2,
      7: '2024-07-03 13:10',
      8: 'Requires physical therapy sessions twice a week.',
    },
    {
      1: 'Alexander',
      2: 'Rodriguez',
      3: 1,
      4: '567891234',
      5: '1976-06-12',
      6: 1,
      7: '2024-07-03 15:05',
      8: 'Patient has a history of heart disease in the family.',
    },
    {
      1: 'Sophia',
      2: 'Hernandez',
      3: 2,
      4: '678912345',
      5: '1985-04-30',
      6: 2,
      7: '2024-07-03 07:40',
      8: 'Currently on a gluten-free diet.',
    },
  ],
};
