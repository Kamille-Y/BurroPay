import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Card from "../components/Card";

const SendCash = (props) => {
  const [p, setP] = useState(0);
  const [i, setI] = useState(0);
  const [n, setN] = useState(6);
  const [m1, setM1] = useState(0);
  const [m2, setM2] = useState(0);
  const [m3, setM3] = useState(0);
  const [borrower, setBorrower] = useState("");

  useEffect(() => {
    setM1((i * (1 + i) ** n) / ((1 + i) ** n - 1));
  }, [i]);
  useEffect(() => {
    setM2(p * m1);
    setM3(Math.round(p * m1));
  }, [p]);

  const handleSubmit = (e) => {
    e.preventDefault();

    var loan = {
      username: "Jason",
      borrower: borrower,
      amount: p,
      interest: i,
      months: n,
    };

    API.loanMoney(loan).then((res) => console.log(res));
  };

  const handleBorrower = (e) => {
    setBorrower(e.target.value);
  };

  const handlePrincipal = (e) => {
    setP(parseInt(e.target.value));
  };

  const handleInterest = (e) => {
    setI(parseInt(e.target.value) / 100);
  };

  const handleDuration = (e) => {
    setN(parseInt(e.target.value));
  };

  return (
    <Container>
      <Card>
        <form  onSubmit={handleSubmit}>
          <Row>
            <Col size="12">
              <label>
                Borrower:
                <input
                  onChange={handleBorrower}
                  className="form-control"
                  type="text"
                  placeholder="Enter Borrower"
                />
              </label>
            </Col>
          </Row>

          <Row>
            <Col size="12">
              <label>
                Principal:
                <input
                  onChange={handlePrincipal}
                  className="form-control"
                  type="p"
                  placeholder="Enter Value"
                  Principal="Amount"
                />
              </label>
            </Col>
          </Row>

          <Row>
            <Col size="12">
              <label>
                Interest:
                <select onChange={handleInterest}>
                  <option value="0" i="">
                    0
                  </option>
                  <option value="5" i="">
                    5%
                  </option>
                  <option value="10" i="">
                    10%
                  </option>
                  <option value="15" i="">
                    15%
                  </option>
                </select>
              </label>
            </Col>
          </Row>

          <Row>
            <Col size="12">
              <label>
                Duration:
                <select onChange={handleDuration}>
                  <option N="Term">6 Months</option>
                  <option N="Term">12 Months</option>
                  <option N="Term">24 Months</option>
                  <option N="Term">36 Months</option>
                </select>
              </label>
            </Col>
          </Row>
          <Row>
            <Col size="12">
              <input type="submit" />
            </Col>
          </Row>
        </form>
      </Card>
    </Container>
  );
};
export default SendCash;
