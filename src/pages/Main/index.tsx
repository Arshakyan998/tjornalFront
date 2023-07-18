import React from "react";
import { useGetAllostQuery } from "../../store/Posts";

type Props = {};

const MainPage = (props: Props) => {
  const { isError, data, isLoading, refetch } = useGetAllostQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  console.log({ isError, data, isLoading, refetch });
  return (
    <div>
      {" "}
      {data &&
        data.map((el) => (
          <div className="bg-white mt-[25px] p-[10px]" key={el._id}>
            <h1 className="font-bold text-[35px] text-center"> {el.title} </h1>

            {el.body.map((items) => {
              return (
                <div key={items.id} className="mt-[10px]">
                  <span>{items.data.text}</span>{" "}
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default MainPage;
