

const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Create Homepage",
    taskDescription: "Design responsive homepage",
    taskDate: "2026-06-01",
    category: "Design"
  },
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Fix Navbar",
    taskDescription: "Resolve mobile navbar issue",
    taskDate: "2026-06-02",
    category: "Development"
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Client Meeting",
    taskDescription: "Discuss requirements",
    taskDate: "2026-05-28",
    category: "Meeting"
  }
]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
  {
    active: true,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "API Integration",
    taskDescription: "Connect frontend and backend",
    taskDate: "2026-06-01",
    category: "Backend"
  },
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Code Review",
    taskDescription: "Review pull requests",
    taskDate: "2026-06-02",
    category: "Review"
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Database Setup",
    taskDescription: "Configure MongoDB",
    taskDate: "2026-05-27",
    category: "Database"
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Payment Gateway",
    taskDescription: "Razorpay integration failed",
    taskDate: "2026-05-30",
    category: "Payment"
  }
]
  },

  {
    id: 3,
    firstName: "Amit",
    email: "employee3@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

   tasks: [
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "API Integration",
    taskDescription: "Connect frontend and backend",
    taskDate: "2026-06-01",
    category: "Backend"
  },
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Code Review",
    taskDescription: "Review pull requests",
    taskDate: "2026-06-02",
    category: "Review"
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Database Setup",
    taskDescription: "Configure MongoDB",
    taskDate: "2026-05-27",
    category: "Database"
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Payment Gateway",
    taskDescription: "Razorpay integration failed",
    taskDate: "2026-05-30",
    category: "Payment"
  }
]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "API Integration",
    taskDescription: "Connect frontend and backend",
    taskDate: "2026-06-01",
    category: "Backend"
  },
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Code Review",
    taskDescription: "Review pull requests",
    taskDate: "2026-06-02",
    category: "Review"
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Database Setup",
    taskDescription: "Configure MongoDB",
    taskDate: "2026-05-27",
    category: "Database"
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Payment Gateway",
    taskDescription: "Razorpay integration failed",
    taskDate: "2026-05-30",
    category: "Payment"
  }
]
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },

    tasks: [
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "API Integration",
    taskDescription: "Connect frontend and backend",
    taskDate: "2026-06-01",
    category: "Backend"
  },
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Code Review",
    taskDescription: "Review pull requests",
    taskDate: "2026-06-02",
    category: "Review"
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Database Setup",
    taskDescription: "Configure MongoDB",
    taskDate: "2026-05-27",
    category: "Database"
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Payment Gateway",
    taskDescription: "Razorpay integration failed",
    taskDate: "2026-05-30",
    category: "Payment"
  }
]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];

/*export const setLocalstorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}*/

export const setLocalstorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}

}