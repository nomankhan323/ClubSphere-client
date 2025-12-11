import api from "../../api/axios";

const loadMyClubs = async () => {
    const user = JSON.parse(localStorage.getItem("clubUser"));
    const res = await api.get("/clubs");
    setMyClubs(res.data.filter(c => c.managerEmail === user.email));
};
