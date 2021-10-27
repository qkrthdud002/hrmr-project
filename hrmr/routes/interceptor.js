module.exports=(req,res,next)=>{
    const user=req.session.userId;
    if(user==undefined || user==null){
        res.redirect('/login');
    }
    else{
        next();
    }
};