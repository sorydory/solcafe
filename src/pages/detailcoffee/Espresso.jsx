import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title2 from "../../components/Title2";
import { API_URL } from "../../config/apiurl";
import { getEso } from "../../modules/special";
import Espressoitem from "./Espressoitem";

const Espresso = () => {
  const CPSData = async () => {
    const data = await axios.get(`${API_URL}/SOL/espresso`);
    return data;
  };
  const { loading, data, error } = useSelector((state) => state.special.eso);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEso(CPSData));
  }, [dispatch]);
  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return <div>데이터가 없음</div>;
  return (
    <div>
      <Title2 title="에스프레소" desc="높은 카페인 함량" />
      <Espressoitem item={data} />
    </div>
  );
};

export default Espresso;
