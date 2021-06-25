let token=null;

const TokenPluggin=req={
    if(token)
    {
        req.set('authorization',`Token ${token}`)
    }
}