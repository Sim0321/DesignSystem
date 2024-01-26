import { useMutation, useQuery } from "@tanstack/react-query";
import { addComponent, getCategory } from "../apis/firebase";
import { useEffect, useState } from "react";

function useComponent() {
  const [categoryArray, setCategoryArray] = useState([]);
  // const [componentDataArray, setComponentDataArray] = useState([]);
  // const queryClient = useQueryClient();
  // v4
  // const categoryQuery = useQuery(["category"], () => getCategory(), {
  //   onSuccess: () => {
  //     console.log("잘 나옴");
  //   },
  // });

  //v5
  const categoryQuery = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });

  const addComponentQuery = useMutation({
    mutationFn: ({ selectCategory, attrObj }) =>
      addComponent(selectCategory, attrObj),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["category"] });
      console.log("성공적으로 등록함");
    },
  });

  useEffect(() => {
    if (categoryQuery.data) {
      // console.log("성공");
      setCategoryArray([...Object.keys(categoryQuery.data)]);
    }
  }, [categoryQuery.data]);

  return {
    categoryQuery,
    addComponentQuery,
    categoryArray,
    // componentDataArray,
  };
}

export default useComponent;
