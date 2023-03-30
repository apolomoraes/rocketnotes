import styled from "styled-components";

export const Load = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @-webkit-keyframes coffee {
  100% {
    opacity: 0;
    -webkit-transform: translateY(-200%);
            transform: translateY(-200%); } }
  @keyframes coffee {
  100% {
    opacity: 0;
    -webkit-transform: translateY(-200%);
            transform: translateY(-200%); } }

.coffee {
  background: #fff;
  display: grid;
  border-radius: 4px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  height: 40px;
  position: relative;
  width: 40px;
  padding: 2px;
  justify-items: center; }
  .coffee:before {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    content: '';
    height: 26px;
    width: 20px;
    border: 4px solid #fff;
    position: absolute;
    top: 50%;
    margin-top: -13px;
    margin-left: -10px;
    left: 100%;
    border-radius: 4px; }
  .coffee div {
    height: 20px;
    width: 8px;
    background: #fff;
    opacity: .3;
    -webkit-animation: coffee 2s infinite;
            animation: coffee 2s infinite; }
  .coffee div:nth-child(1) {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .coffee div:nth-child(2) {
    -webkit-animation-delay: 1s;
            animation-delay: 1s; }
  .coffee div:nth-child(3) {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
`;