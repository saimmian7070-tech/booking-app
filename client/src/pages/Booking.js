// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Booking() {
//   const [bookings, setBookings] = useState([]);
//   const [userName, setUserName] = useState("");
//   const [selectedService, setSelectedService] = useState("");

//   const navigate = useNavigate();

//   const services = [
//     { name: "Web Development", icon: "💻" },
//     { name: "App Development", icon: "📱" },
//     { name: "UI/UX Design", icon: "🎨" },
//     { name: "SEO Optimization", icon: "🚀" },
//     { name: "Bug Fixing", icon: "🛠️" }
//   ];

//   const fetchBookings = () => {
//     const token = localStorage.getItem("token");

//     axios
//       .get("http://localhost:5000/api/bookings", {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//       .then(res => setBookings(res.data))
//       .catch(err => console.log(err));
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return navigate("/login");
//     fetchBookings();
//   }, []);

//   const bookService = () => {
//     const token = localStorage.getItem("token");

//     if (!userName || !selectedService) {
//       alert("Please fill all fields");
//       return;
//     }

//     axios
//       .post(
//         "http://localhost:5000/api/bookings",
//         {
//           userName,
//           serviceName: selectedService
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       )
//       .then(() => {
//         fetchBookings();
//         setUserName("");
//         setSelectedService("");
//       });
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div style={styles.page}>

//       {/* HEADER */}
//       <div style={styles.header}>
//         <div>
//           <h1 style={styles.title}>Service Booking</h1>
//           <p style={styles.sub}>Select a service and manage bookings</p>
//         </div>

//         <button style={styles.logout} onClick={logout}>
//           Logout
//         </button>
//       </div>

//       {/* MAIN LAYOUT */}
//       <div style={styles.layout}>

//         {/* LEFT PANEL */}
//         <div style={styles.panel}>
//           <h2 style={styles.heading}>Create Booking</h2>

//           <input
//             style={styles.input}
//             placeholder="Your Name"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />

//           <div style={styles.serviceGrid}>
//             {services.map((s, i) => (
//               <div
//                 key={i}
//                 onClick={() => setSelectedService(s.name)}
//                 style={{
//                   ...styles.serviceCard,
//                   border:
//                     selectedService === s.name
//                       ? "2px solid #3b82f6"
//                       : "1px solid rgba(255,255,255,0.08)"
//                 }}
//               >
//                 <div style={{ fontSize: "20px" }}>{s.icon}</div>
//                 <div style={{ fontSize: "14px" }}>{s.name}</div>
//               </div>
//             ))}
//           </div>

//           <button style={styles.button} onClick={bookService}>
//             Confirm Booking
//           </button>
//         </div>

//         {/* RIGHT PANEL */}
//         <div style={styles.panel}>
//           <h2 style={styles.heading}>Recent Bookings</h2>

//           {bookings.length === 0 ? (
//             <p style={{ opacity: 0.5 }}>No bookings yet</p>
//           ) : (
//             bookings.map((b, i) => (
//               <div key={i} style={styles.bookingCard}>

//                 <div style={styles.avatar}>
//                   {b.userName?.charAt(0).toUpperCase()}
//                 </div>

//                 <div style={{ flex: 1 }}>
//                   <div style={styles.bookingTop}>
//                     <span style={styles.name}>{b.userName}</span>
//                     <span style={styles.badge}>Booked</span>
//                   </div>

//                   <p style={styles.serviceText}>{b.serviceName}</p>
//                 </div>

//               </div>
//             ))
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     padding: "40px",
//     background: "#0f172a",
//     color: "white",
//     fontFamily: "Inter, sans-serif"
//   },

//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "30px"
//   },

//   title: {
//     margin: 0,
//     fontSize: "28px"
//   },

//   sub: {
//     margin: 0,
//     opacity: 0.6
//   },

//   logout: {
//     padding: "10px 14px",
//     borderRadius: "10px",
//     border: "none",
//     background: "#ef4444",
//     color: "white",
//     cursor: "pointer"
//   },

//   layout: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "20px"
//   },

//   panel: {
//     background: "rgba(255,255,255,0.04)",
//     borderRadius: "16px",
//     padding: "20px",
//     border: "1px solid rgba(255,255,255,0.08)",
//     backdropFilter: "blur(10px)"
//   },

//   heading: {
//     marginBottom: "15px"
//   },

//   input: {
//     width: "100%",
//     padding: "12px",
//     borderRadius: "10px",
//     border: "1px solid rgba(255,255,255,0.1)",
//     background: "rgba(255,255,255,0.05)",
//     color: "white",
//     marginBottom: "15px",
//     outline: "none"
//   },

//   serviceGrid: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "10px",
//     marginBottom: "15px"
//   },

//   serviceCard: {
//     padding: "12px",
//     borderRadius: "12px",
//     cursor: "pointer",
//     textAlign: "center",
//     background: "rgba(255,255,255,0.03)"
//   },

//   button: {
//     width: "100%",
//     padding: "12px",
//     borderRadius: "10px",
//     background: "#3b82f6",
//     color: "white",
//     border: "none",
//     fontWeight: "bold",
//     cursor: "pointer"
//   },

//   bookingCard: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "12px",
//     marginBottom: "10px",
//     borderRadius: "14px",
//     background: "rgba(255,255,255,0.03)",
//     border: "1px solid rgba(255,255,255,0.06)"
//   },

//   avatar: {
//     width: "38px",
//     height: "38px",
//     borderRadius: "50%",
//     background: "#3b82f6",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontWeight: "bold"
//   },

//   bookingTop: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center"
//   },

//   name: {
//     fontWeight: "600"
//   },

//   serviceText: {
//     margin: "4px 0 0 0",
//     opacity: 0.6,
//     fontSize: "13px"
//   },

//   badge: {
//     fontSize: "11px",
//     padding: "4px 8px",
//     borderRadius: "20px",
//     background: "rgba(59,130,246,0.2)",
//     color: "#60a5fa",
//     border: "1px solid rgba(59,130,246,0.3)"
//   }
// };

// export default Booking;

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [userName, setUserName] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const navigate = useNavigate();

  const services = [
    { name: "Web Development", icon: "💻" },
    { name: "App Development", icon: "📱" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "SEO Optimization", icon: "🚀" },
    { name: "Bug Fixing", icon: "🛠️" }
  ];

  const API_BASE = "https://YOUR-BACKEND-URL"; // 👈 replace with Replit URL

  const fetchBookings = () => {
    const token = localStorage.getItem("token");

    axios
      .get(`${API_BASE}/api/bookings`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const data = res.data;

        // ✅ safe handling (fixes .map crash)
        if (Array.isArray(data)) {
          setBookings(data);
        } else if (Array.isArray(data.bookings)) {
          setBookings(data.bookings);
        } else {
          setBookings([]);
        }
      })
      .catch(err => {
        console.log("Fetch error:", err);
        setBookings([]);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
    fetchBookings();
  }, []);

  const bookService = () => {
    const token = localStorage.getItem("token");

    if (!userName || !selectedService) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post(
        `${API_BASE}/api/bookings`,
        {
          userName,
          serviceName: selectedService
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(() => {
        fetchBookings();
        setUserName("");
        setSelectedService("");
      })
      .catch(err => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Service Booking</h1>
          <p style={styles.sub}>Select a service and manage bookings</p>
        </div>

        <button style={styles.logout} onClick={logout}>
          Logout
        </button>
      </div>

      {/* MAIN LAYOUT */}
      <div style={styles.layout}>

        {/* LEFT */}
        <div style={styles.panel}>
          <h2 style={styles.heading}>Create Booking</h2>

          <input
            style={styles.input}
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <div style={styles.serviceGrid}>
            {services.map((s, i) => (
              <div
                key={i}
                onClick={() => setSelectedService(s.name)}
                style={{
                  ...styles.serviceCard,
                  border:
                    selectedService === s.name
                      ? "2px solid #3b82f6"
                      : "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <div style={{ fontSize: "20px" }}>{s.icon}</div>
                <div style={{ fontSize: "14px" }}>{s.name}</div>
              </div>
            ))}
          </div>

          <button style={styles.button} onClick={bookService}>
            Confirm Booking
          </button>
        </div>

        {/* RIGHT */}
        <div style={styles.panel}>
          <h2 style={styles.heading}>Recent Bookings</h2>

          {Array.isArray(bookings) && bookings.length === 0 ? (
            <p style={{ opacity: 0.5 }}>No bookings yet</p>
          ) : (
            bookings.map((b, i) => (
              <div key={i} style={styles.bookingCard}>
                <div style={styles.avatar}>
                  {b?.userName?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={styles.bookingTop}>
                    <span style={styles.name}>{b.userName}</span>
                    <span style={styles.badge}>Booked</span>
                  </div>

                  <p style={styles.serviceText}>{b.serviceName}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "#0f172a",
    color: "white",
    fontFamily: "Inter, sans-serif"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px"
  },
  title: { fontSize: "28px", margin: 0 },
  sub: { opacity: 0.6, margin: 0 },
  logout: {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#ef4444",
    color: "white",
    cursor: "pointer"
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },
  panel: {
    background: "rgba(255,255,255,0.04)",
    borderRadius: "16px",
    padding: "20px",
    border: "1px solid rgba(255,255,255,0.08)"
  },
  heading: { marginBottom: "15px" },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    marginBottom: "15px"
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "15px"
  },
  serviceCard: {
    padding: "12px",
    borderRadius: "12px",
    cursor: "pointer",
    textAlign: "center",
    background: "rgba(255,255,255,0.03)"
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    background: "#3b82f6",
    color: "white",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer"
  },
  bookingCard: {
    display: "flex",
    gap: "12px",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.03)"
  },
  avatar: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#3b82f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  bookingTop: {
    display: "flex",
    justifyContent: "space-between"
  },
  name: { fontWeight: "600" },
  serviceText: { opacity: 0.6, fontSize: "13px" },
  badge: {
    fontSize: "11px",
    padding: "4px 8px",
    borderRadius: "20px",
    background: "rgba(59,130,246,0.2)",
    color: "#60a5fa"
  }
};

export default Booking;