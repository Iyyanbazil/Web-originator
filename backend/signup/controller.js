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
    if(password === user.password){
      res.json(user)
        // res.send({message:`login as ${user.name}`,user:user})
    }else{
        res.send({message:"Password not match"})
    }
}else{
    res.send({message:"No such user exist"})
}
}
)
}

