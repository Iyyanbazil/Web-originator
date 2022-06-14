import Users from './userModal';

export const postData = (req, res) => {
  const { Fname, Lname, email, password, Cpassword } = req.body;
  Users.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send('user exist');
    } else {
      const user = new Users({
        Fname,
        Lname,
        email,
        password,
        Cpassword,
      });
      user.save();
    //   console.log(req.body);
    }
  });
};
export const test =(req,res)=>{
res.json({msg:"subbmitted"})
}

export const getData=(req,res)=>{
const {email,password}=req.body
Users.findOne({email:email},(err,user)=>{

  if(user){
    // res.json({message:`login as ${user.name}`,user:user})
    // console.log(message);
    if(password === user.password){
      console.log(user);
        res.json({message:"login",user:user})
    }else{
        res.json({message:"Password not match"})
    }
  }else{
    res.send({message:"No such user exist"});
}
}
)
}

