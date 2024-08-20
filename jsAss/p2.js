//2. JavaScript Program to Find the Largest Among Three Numbers

function largest(x,y,z)
{
    if(x>=y && x>=z)
    {
        return x;
    }elseif(y>=x && y>=x)
        {
          return y;
        }else
        {
            return z;
        }
    
}
console.log(largest(4,5,6));