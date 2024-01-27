import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addComponent, getCategory } from "../apis/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useComponent() {
  const navigate = useNavigate();
  const [categoryArray, setCategoryArray] = useState([]);
  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries({ queryKey: ["category"] });
      // console.log("성공적으로 등록함");
      navigate("/");
    },
  });

  useEffect(() => {
    if (categoryQuery.data) {
      setCategoryArray([...Object.keys(categoryQuery.data)]);
    }
  }, [categoryQuery.data]);

  return {
    categoryQuery,
    addComponentQuery,
    categoryArray,
  };
}

export default useComponent;
