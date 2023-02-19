export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.email}</div>;
    },
  },
  {
    field: "Register date",
    headerName: "Register Date",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.registerDate}</div>;
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Vishwa Shah",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "vishwa@gmail.com",
    registerDate: "02/03/2023",
  },
  {
    id: 2,
    username: "Adam Saxsena",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "adam@gmail.com",
    registerDate: "03/03/2023",
  },
  {
    id: 3,
    username: "Vansh Shah",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "vamsh@gmail.com",
    registerDate: "03/03/2023",
  },
];
