import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import md5 from "md5";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let FNAME="";
let Area="";
let phoneno="";
let payment="";
let cost=0;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/real.html");
 
});
app.get("/aboutr", (req, res) => {
    res.sendFile(__dirname + "/aboutr.html");
 
});

//for banashankari
app.get("/Banas", (req, res5) => {
    const db = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "RealEstate",
        password: "Kabilesh",
        port: 5432,
    });
    db.connect();
    Area="Banashankari"
    let D600=0;
    let D1200=0
    let D2400=0
    const query='SELECT area1,dimensions from site_booked';
    const Arrayres=[]
    db.query(query, (err, res) => {
      if (err) {
          console.error(err);
      } else {
          Arrayres.push(...res.rows)
          console.log("details of the booked")
          console.log(Arrayres)
          for(var i=0;i<Arrayres.length;i++){
            if(Arrayres[i].area1=="Banashankari" && Arrayres[i].dimensions=="600"){
                D600++;
                console.log(D600)
            }
            if(Arrayres[i].area1=="Banashankari" && Arrayres[i].dimensions=="1200"){
                D1200++;
                console.log(D1200)
            }
            if(Arrayres[i].area1=="Banashankari" && Arrayres[i].dimensions=="2400"){
                D2400++;
                console.log(D2400)
            }
          }
          console.log("after values")
          console.log(D600)
          console.log(D1200)
          console.log(D2400)
          const data = {
              FNAME: FNAME, // Make sure FNAME is defined
              D600: 4-D600,
              D1200: 4-D1200,
              D2400: 4-D2400,
              Area:Area,
          };
          res5.render("bans.ejs",data)
      }
    })
   
});

//end of the banashankari

// start of the kanakpura
app.get("/Kanakapura", (req, res6) => {
    const db = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "RealEstate",
        password: "Kabilesh",
        port: 5432,
    });
    db.connect();
    Area="Kanakapura"
    let D600=0;
    let D1200=0
    let D2400=0
    const query='SELECT area1,dimensions from site_booked';
    const Arrayres=[]
    db.query(query, (err, res) => {
      if (err) {
          console.error(err);
      } else {
          Arrayres.push(...res.rows)
         
          for(var i=0;i<Arrayres.length;i++){
            if(Arrayres[i].area1=="Kanakapura" && Arrayres[i].dimensions=="600"){
                D600++;
                console.log(D600)
            }
            if(Arrayres[i].area1=="Kanakapura" && Arrayres[i].dimensions=="1200"){
                D1200++;
                console.log(D1200)
            }
            if(Arrayres[i].area1=="Kanakapura" && Arrayres[i].dimensions=="2400"){
                D2400++;
                console.log(D2400)
            }
          }
          console.log("after values")
          console.log(D600)
          console.log(D1200)
          console.log(D2400)
         
          const data = {
              FNAME: FNAME, // Make sure FNAME is defined
              D600: 4-D600,
              D1200: 4-D1200,
              D2400: 4-D2400,
              Area:Area,
          };
          res6.render("bans.ejs",data)
      }
    })

});
// end of the kanakpura

//start of the mgroad
app.get("/MGRoad", (req, res7) => {
    const db = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "RealEstate",
        password: "Kabilesh",
        port: 5432,
    });
    db.connect();
    Area="Mgroad"
    let D600=0;
    let D1200=0
    let D2400=0
    const query='SELECT area1,dimensions from site_booked';
    const Arrayres=[]
    db.query(query, (err, res) => {
      if (err) {
          console.error(err);
      } else {
          Arrayres.push(...res.rows)
          
          for(var i=0;i<Arrayres.length;i++){
            if(Arrayres[i].area1=="Mgroad" && Arrayres[i].dimensions=="600"){
                D600++;
                console.log(D600)
            }
            if(Arrayres[i].area1=="Mgroad" && Arrayres[i].dimensions=="1200"){
                D1200++;
                console.log(D1200)
            }
            if(Arrayres[i].area1=="Mgroad" && Arrayres[i].dimensions=="2400"){
                D2400++;
                console.log(D2400)
            }
          }
          console.log("after values")
          console.log(D600)
          console.log(D1200)
          console.log(D2400)
          
          const data = {
              FNAME: FNAME, // Make sure FNAME is defined
              D600: 4-D600,
              D1200: 4-D1200,
              D2400: 4-D2400,
              Area:Area,
          };
          res7.render("bans.ejs",data)
      }
    })
    
 
});
//start of uttarhali
app.get("/Uttarhali", (req, res10) => {
    const db = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "RealEstate",
        password: "Kabilesh",
        port: 5432,
    });
    db.connect();
    // change is required for counting the sites left 
    Area="Uttarahalli"
    let D600=0;
    let D1200=0
    let D2400=0
    const query='SELECT area1,dimensions from site_booked';
    const Arrayres=[]
    db.query(query, (err, res) => {
      if (err) {
          console.error(err);
      } else {
          Arrayres.push(...res.rows)
          console.log("details of the booked")
          
          for(var i=0;i<Arrayres.length;i++){
            if(Arrayres[i].area1=="Uttarahalli" && Arrayres[i].dimensions=="600"){
                D600++;
                console.log(D600)
            }
            if(Arrayres[i].area1=="Uttarahalli" && Arrayres[i].dimensions=="1200"){
                D1200++;
                console.log(D1200)
            }
            if(Arrayres[i].area1=="Uttarahalli" && Arrayres[i].dimensions=="2400"){
                D2400++;
                console.log(D2400)
            }
          }
          console.log("after values")
          console.log(D600)
          console.log(D1200)
          console.log(D2400)
          
          const data = {
              FNAME: FNAME, // Make sure FNAME is defined
              D600: 4-D600,
              D1200: 4-D1200,
              D2400: 4-D2400,
              Area:Area,
          };
          res10.render("bans.ejs",data)
      }
    })
  
});


// end of uttarhali
app.get("/Anlytical", (req, res) => {
    res.sendFile(__dirname + "/Anlytical.html");
 
});
app.get("/pricing", (req, res) => {
    res.sendFile(__dirname + "/pricing.html");
 
});
app.get("/loginr", (req, res) => {
    res.sendFile(__dirname + "/loginr.html");
 
});
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
 
});
app.get("/feedbackform", (req, res) => {
    res.sendFile(__dirname + "/feedback.html");
 
});
app.get("/profileupdate", (req, res) => {
    res.sendFile(__dirname + "/updateprofile.html");
 
});

//This is the login final
app.post("/submitlogin",(req,res12) => {
    var login_name=req.body["cname1"];
    FNAME=login_name;
    var login_Password=req.body["Password1"];
    var login_phoneno=req.body["phoneno"]
    phoneno=login_phoneno;
    console.log(" i am in login form")
    console.log(login_name)
    console.log(login_Password)
    console.log(login_phoneno)
    const db = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "RealEstate",
        password: "Kabilesh",
        port: 5432,
      });
      db.connect();
      const query='SELECT Name,Password from site_Name';
      const Array=[]
      db.query(query, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            Array.push(...res.rows)
            //console.table(res.rows);

            for(var i=0;i<Array.length;i++){
                
                //console.log(Array[i].name)
                //console.log(Array[i].password)
                if(Array[i].name==login_name && Array[i].password==md5(login_Password)){
                    
                    const query1='SELECT * from site_booked';
                    const Array1=[]
                    db.query(query1,(err,res)=>{
                        if(err)
                        {
                            console.log(err)
                        }
                        else
                        {
                            console.log("password successful")
                            Array1.push(...res.rows)
                            const AREA=[]
                            const SITENO=[]
                            const DIMEN=[]
                            for(var i=0;i<Array1.length;i++){
                                if(Array1[i].cname==login_name && Array1[i].phone_number==login_phoneno){
                                    console.log("printing:")
                                    console.log(Array1[i]);
                                    AREA.push(Array1[i].area1);
                                    SITENO.push(Array1[i].site_id);
                                    DIMEN.push(Array1[i].dimensions);
                                }
                            }
                            const data={
                                FNAME:login_name,
                                AREA:AREA,
                                SITENO:SITENO,
                                DIMEN:DIMEN,
                                phone:login_phoneno

                            }
                            console.log(data);
                            res12.render("profile.ejs",data)

                        }
                    })
                    
                }else{
                    res12.sendFile(__dirname+ "/inclog.html");
                }
            }
            
        }

    
      

    })
})
//feedback
app.post("/feedback",(req,res) => {
    var feedback_name=req.body["feedbackName"];
    var feedback_rating=req.body["feedbackRating"];
    var feedback_info=req.body["feedbackMessage"];
    payment=req.body['paymentMethod'];
    console.log("feedback details:")
    console.log(feedback_info)
    console.log(feedback_rating)
    console.log(payment)
    const db = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "RealEstate",
        password: "Kabilesh",
        port: 5432,
      });
      db.connect();
      console.log("cost:")
      console.log(cost)
      const query = 'INSERT INTO feedback(name,rating,feedback,phone) VALUES($1, $2, $3,$4)';
      const values = [feedback_name,feedback_rating,feedback_info,phoneno];

    db.query(query, values, (err, dbres) => {
    if (err) {
        console.log(err)
       
    } else {
        console.log("successfully inserted feedback");
        const query2 = 'INSERT INTO receipt(name,pmethod,total_cost) VALUES($1,$2,$3)';
        const values12 = [feedback_name,payment,cost];
        db.query(query2, values12, (err, dbres) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Inserted successfully receipt');
            }
        });

        res.sendFile(__dirname+ "/real.html");
    }
   
    // Disconnect from the database
    
    }); 
})
//Final registration of site dimensions
app.post("/submitRegister", (req, res1) => {

    var CD600 = req.body["D600"];
    var CD1200 = req.body["D1200"];
    var CD2400 = req.body["D2400"];

    console.log(CD600);
    console.log(CD1200);
    console.log(CD2400);
    console.log(Area);
    console.log(FNAME);
    console.log(phoneno);
    if(Area=="Banashankari"){
        cost=(CD600*0.58) + (CD1200*1.17) + (CD2400*2.34)+cost
    }
    if(Area=="Kanakapura"){
        cost=(CD600*0.52) + (CD1200*1.03) + (CD2400*2.04)+cost
    }
    if(Area=="MGRoad"){
        cost=(CD600*0.87) + (CD1200*1.74) + (CD2400*3.48)+cost
    }
    if(Area=="Uttarahalli"){
        cost=(CD600*0.42) + (CD1200*0.83) + (CD2400*1.67)+cost
    }
    console.log("total_cost:"+cost)
    const db = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "RealEstate",
        password: "Kabilesh",
        port: 5432,
    });
    db.connect();
    const query = 'SELECT site_name,dimensions,id1 from predefined';
    const a1 = []
    const a2 = []
    const a3 = []
    db.query(query, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            a1.push(...res.rows);
            const queryx = 'SELECT area1,site_id,dimensions from site_booked';
            const a5 = [];
            db.query(queryx, (err, res15) => {
                if (err) {
                    console.error(err);
                } else {
                    a5.push(...res15.rows);
                    console.log("Printing the contents of the sitebooked");
                    console.log(a5);

                    for (var i = 0; i < 48; i++) {
                        if (a5.length == 0 || (a5.length > 0 && !a5.some(item => item.site_id === a1[i].id1))) {
                            if (a1[i].site_name == Area && a1[i].dimensions == "600" && CD600 != 0) {
                                CD600 = 0;
                                console.log(a1[i].id1);
                                a2.push(a1[i].id1);
                                a3.push(a1[i].dimensions);
                            }
                            if (a1[i].site_name == Area && a1[i].dimensions == "1200" && CD1200 != 0) {
                                CD1200 = 0;
                                console.log(a1[i].id1);
                                a2.push(a1[i].id1);
                                a3.push(a1[i].dimensions);
                            }
                            if (a1[i].site_name == Area && a1[i].dimensions === "2400" && CD2400 != 0) {
                                CD2400 = 0;
                                console.log(a1[i].id1);
                                a2.push(a1[i].id1);
                                a3.push(a1[i].dimensions);
                            }
                        }
                    }

                    console.log(a2);
                    console.log(a3);

                    if (a2.length > 0) {
                        for (var j = 0; j < a2.length; j++) {
                            const query2 = 'INSERT INTO site_booked(cname, area1, site_id, dimensions,phone_number) VALUES($1, $2, $3, $4,$5)';
                            const values12 = [FNAME, Area, a2[j], a3[j],phoneno];

                            db.query(query2, values12, (err, dbres) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log('Inserted successfully');
                                }
                            });
                        }
                    }

                    res1.sendFile(__dirname + "/decision.html");
                }
            });
        }
    });
});

app.post("/submit",(req,res) => {
    var customer_name=req.body["cname"];
    FNAME=customer_name;
    
    var customer_address=req.body["address"];
    var customer_phone=req.body["phone"];
    var customer_email=req.body["email"];
    var customer_password=md5(req.body["Password"]);
    phoneno=customer_phone
    console.log(customer_name)
    console.log(customer_address)
    console.log(customer_phone)
    const db = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "RealEstate",
        password: "Kabilesh",
        port: 5432,
      });
      db.connect();
    // Insert data into the site_Name table
    const query = 'INSERT INTO site_Name(Name, Adress, Phone, Email, Password) VALUES($1, $2, $3, $4, $5)';
    const values = [customer_name,customer_address,customer_phone,customer_email,customer_password];

    db.query(query, values, (err, dbres) => {
    if (err) {
        console.log(err)
        
        res.sendFile(__dirname + "/paswrong.html");
        
    } else {
        res.sendFile(__dirname+ "/pricing.html")
    }

    // Disconnect from the database
    db.end();
    }); 
    
    
   
    })
//update profile
app.post("/updateprofile", async (req, res) => {
    try {
        const u_name = String(req.body["uname"]);
        const u_phoneno = String(req.body["uphoneno"]);

        console.log("Attempting to update profile with:", u_name, u_phoneno);

        const db = new pg.Client({
            user: "postgres",
            host: "localhost",
            database: "RealEstate",
            password: "Kabilesh",
            port: 5432,
        });

        await db.connect();
        console.log("Connected to the database.");

        // site_name
        const updateQuery1 = `
            UPDATE site_name
            SET phone = '${u_phoneno}'
            WHERE name = '${u_name}'
        `;

        console.log("Query 1:", updateQuery1);

        const result1 = await db.query(updateQuery1);
        console.log("Query result 1:", result1);

        // site_booked
        const updateQuery2 = `
            UPDATE site_booked
            SET phone_number = '${u_phoneno}'
            WHERE cname = '${u_name}'
        `;

        console.log("Query 2:", updateQuery2);

        const result2 = await db.query(updateQuery2);
        console.log("Query result 2:", result2);

        // Close the database connection
        await db.end();
        console.log("Database connection closed.");

        if (result1.rowCount > 0 || result2.rowCount > 0) {
            console.log("updated succesfully:")
            res.sendFile(__dirname+ "/updpro.html")
        } else {
            res.status(404).send("Profile not found for the provided name");
        }
    } catch (error) {
        console.error("Error updating profile:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log('Listening on port ${port}');
  });