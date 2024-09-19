import React from "react";
import styled from "styled-components";
import color from "../style/theme";

/**
 * Just introduction for dev-portfolio-app.
 *
 * If you want to view internal of Introduction,
 * go to the './src/common/instruction/Introduction.tsx'
 */
const Introduction = ({ id }: { id: string }) => {
  return (
    <Wrap id={id}>
      <span style={{ color: `${color.pointColor}` }}>안녕하세요 양지훈입니다.</span>
      <br />
      <span>양지훈 포토폴리오 입니다.</span>
      <span>
       22222222
      </span>
      <span>
  333333333
      </span>
      <br />
      <span>44444444</span>
    </Wrap>
  );
};

export default Introduction;

const Wrap = styled.div`
  padding: 2em;
  /* height: 30vh; */
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 400;
  /* text-align: center; */
  /* justify-content: space-between; */
`;
