const dataWorklog = [
  {
    id: 1,
    name: 'Dmitry',
    surname: 'Nikonchuk',
    done: [
      { time: 5, feature: 'styleguide of a project' },
      { time: 3, feature: 'a home page' },
      { time: 2, feature: 'files of the data' },
      { time: 5, feature: 'stylization of a project' },
      { time: 2, feature: 'refactoring code' },
      { time: 2, feature: 'bug fixing' },
    ],
  },
  {
    id: 2,
    name: 'Petr',
    surname: 'Penner',
    done: [
      { time: 4, feature: 'page search photographers' },
      { time: 5, feature: 'files of the data' },
      { time: 1, feature: 'search implementation' },
      { time: 2, feature: 'images of project' },
      {
        time: 3,
        feature: 'translate implementation on page search photographers',
      },
    ],
  },
  {
    id: 3,
    name: 'Max',
    surname: 'Danilau',
    done: [
      { time: 0, feature: 'init a project' },
      { time: 0, feature: 'timeline, slider' },
      { time: 0, feature: 'map, video' },
      { time: 0, feature: 'dependencies of a project' },
      { time: 0, feature: '' },
      { time: 0, feature: '' },
      { time: 0, feature: '' },
    ],
  },
  {
    id: 4,
    name: 'Liudmila',
    surname: 'Arzamasova',
    done: [
      { time: 3, feature: 'create a design of project' },
      { time: 5, feature: 'implement page of a team' },
      { time: 1, feature: 'formatting' },
      { time: 2, feature: 'files of the data' },
      { time: 3, feature: 'implement page of a worklog' },
      { time: 1, feature: 'translate of a team page' },
    ],
  },
  {
    id: 5,
    name: 'Siarhei',
    surname: 'Iukou',
    done: [
      { time: 4, feature: 'create a router' },
      { time: 4, feature: 'file structure of project' },
      { time: 2, feature: 'language component' },
      { time: 1, feature: 'stylization of a project' },
    ],
  },
];

export const headersTable = ['Spend time', 'Features'];
export default dataWorklog;
