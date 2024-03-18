import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label } from 'reactstrap';
import { DatePickers, SelectDateWithTime, CustomDateFormat, TodayButton, DisableDaysOfWeek, SpecificDateRange, MinDate, MaxDate, DateRange, InlineVersion, DisableDatepicker, SelectTimeOnly, Default } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import DatePicker from 'react-datepicker';
import { Breadcrumbs } from '../../../AbstractElements';

const Datepicker = () => {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const handleChange = date => {
    setstartDate(date);
  };
  const addDays = date => {
    setstartDate(date, 4);
  };
  // eslint-disable-next-line
  const setEndDate = date => {
    setendDate(date);
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Announcement' parent="Forms" title="Announcement" subParent='Form Widgets' />
      <Container fluid={true}>
        <Row>
          <Col>
            <div className=" row-cols-1 row-cols-md-4 row-cols-xl-1">
              <div className="col devanshu">
                <div className="card radius-10 cards-menu">
                  <div className="announcement">
                    <h4
                      style={{
                        color: "#7366FF",
                        fontFamily: "arial",
                        fontWeight: "bold",
                      }}
                    >
                      Announcement
                    </h4>

                    <marquee behavior="" direction="left">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laboriosam ab ad sapiente repellendus quibusdam veritatis quae
                      vero enim doloribus labore?
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
            <div className=" row-cols-1 row-cols-md-4 row-cols-xl-1">
              <div className="col devanshu">
                <div className="card radius-10 cards-menu">
                  <div className="announcement">
                    <h4
                      style={{
                        color: "#7366FF",
                        fontFamily: "arial",
                        fontWeight: "bold",
                      }}
                    >
                      Announcement
                    </h4>

                    <marquee behavior="" direction="left">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laboriosam ab ad sapiente repellendus quibusdam veritatis quae
                      vero enim doloribus labore?
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Datepicker;