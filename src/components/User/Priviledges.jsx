import React, { useState } from "react";
import "./Priviledges.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

const Priviledges = () => {
  // State to manage modal visibility and form data
  const [recyclerModalVisible, setRecyclerModalVisible] = useState(false);
  const [organizationModalVisible, setOrganizationModalVisible] =
    useState(false);

  // State to manage form data for Recycler and Organization
  const [recyclerFormData, setRecyclerFormData] = useState({
    companyName: "",
    companyLocation: "",
  });

  const [organizationFormData, setOrganizationFormData] = useState({
    organizationName: "",
    organizationType: "",
    organizationlocation: "",
  });

  // Function to handle form submissions for Recycler
  const handleRecyclerSubmit = (e) => {
    e.preventDefault();
    console.log("Recycler form submitted:", recyclerFormData);
    setRecyclerModalVisible(false);
  };

  // Function to handle form submissions for Organization
  const handleOrganizationSubmit = (e) => {
    e.preventDefault();
    console.log("Organization form submitted:", organizationFormData);
    setOrganizationModalVisible(false);
  };

  return (
    <div>
      <div class="bio-graph-heading ">Privildges</div>
      <Container className="d-flex flex-column justify-content-center align-items-center mt-4">
        <h2>Join as a Priviledged member</h2>
        <Row>
          <Col>
            <Button onClick={() => setRecyclerModalVisible(true)} className="">
              Recycler
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={() => setOrganizationModalVisible(true)}
              className="mt-3"
            >
              Organization
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal
        show={recyclerModalVisible}
        onHide={() => setRecyclerModalVisible(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Join as a Recycler</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRecyclerSubmit}>
            <Form.Group controlId="recyclerName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={recyclerFormData.companyName}
                onChange={(e) =>
                  setRecyclerFormData({
                    ...recyclerFormData,
                    companyName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="recyclerLocation">
              <Form.Label>Company Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                value={recyclerFormData.companyLocation}
                onChange={(e) =>
                  setRecyclerFormData({
                    ...recyclerFormData,
                    companyLocation: e.target.value,
                  })
                }
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button type="submit" variant="success" className="mt-3">
                Send Approval Request
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={organizationModalVisible}
        onHide={() => setOrganizationModalVisible(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">
            Join as an Organization
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOrganizationSubmit}>
            <Form.Group controlId="organizationName">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter organization name"
                value={organizationFormData.organizationName}
                onChange={(e) =>
                  setOrganizationFormData({
                    ...organizationFormData,
                    organizationName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="organizationType">
              <Form.Label>Organization Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter organization type"
                value={organizationFormData.organizationType}
                onChange={(e) =>
                  setOrganizationFormData({
                    ...organizationFormData,
                    organizationType: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="organizationLocation">
              <Form.Label>Organization Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter organization location"
                value={organizationFormData.organizationLocation}
                onChange={(e) =>
                  setOrganizationFormData({
                    ...organizationFormData,
                    organizationLocation: e.target.value,
                  })
                }
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button type="submit" variant="success" className="mt-3">
                Send Approval Request
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Priviledges;
