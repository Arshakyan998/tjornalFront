import React from "react";
import { useParams, useNavigate,useSearchParams } from "react-router-dom";
type Props = {};

const Test = (props: Props) => {
  const params = useParams();
  const navigate = useNavigate();
const [searchParams,setSearchParams]=useSearchParams()
 const data=[...searchParams.entries()].reduce((aggr,val)=>aggr={...aggr,[val[0]]:val[1]},{})
 
console.log(data);

  return (
    <div
      onClick={() => {
        navigate(
           'test/878',

          {
            replace: true,

            state: params.id,
          }
        );
        setSearchParams({data:"7",sort:"asc"})
      }}
    >
      zzz
    </div>
  );
};

export default Test;
