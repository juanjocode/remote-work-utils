import React from 'react';
import { Image, Row, Col, Button } from 'react-bootstrap';
import { Input } from '../components/Input';

const applicationsCollection = [
  { name: 'Trello', src: 'src/assets/images/trello.png' },
  { name: 'Slack', src: 'src/assets/images/slack.png' },
  { name: 'Github', src: 'src/assets/images/github.png' },
  { name: 'Discord', src: 'src/assets/images/discord.png' },
  { name: 'Zoom', src: 'src/assets/images/zoom.png' },
];

const AddCollaborator = () => (
  <div style={{ height: '600px', width: '800px' }}>
    <div className="h-100 w-100 d-flex flex-column">
      <div className="border-bottom" style={{ display: 'grid', gridTemplateColumns: '180px auto' }}>
        <div style={{ height: '150px', width: '150px', alignSelf: 'center', justifySelf: 'center' }}>
          <Image src="src/assets/images/user-icon.svg" />
        </div>
        <div style={{ margin: '30px' }}>
          <div className="d-flex">
            <div className="w-100 pr-3">
              <Input label="Name" placeholder="Name" />
            </div>
            <div className="w-100">
              <Input label="Email" placeholder="Email" />
            </div>
          </div>
          <div className="d-flex">
            <div className="w-100 pr-3">
              <Input label="Title" placeholder="Title" />
            </div>
            <div className="w-100">
              <Input label="Schedule" placeholder="Mon-Fri 8:00am - 5:00pm" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Row style={{ paddingTop: '25px', paddingBottom: '25px' }}>
          <Col>Select the applications to assign to your collaborator</Col>
        </Row>
        <div className="d-flex justify-content-between" style={{ paddingTop: '25px', paddingBottom: '25px' }}>
          {applicationsCollection.map((app) => (
            <div className="d-flex flex-column align-items-center">
              <div style={{ height: '75px', width: '75px' }}>
                <Image src={app.src} alt={app.name} width="75px" />
              </div>
              <input type="checkbox" className="mt-1" />
            </div>
          ))}
        </div>
        <Row style={{ paddingTop: '25px', paddingBottom: '25px' }}>
          <Col>
            <div className="d-flex justify-content-end">
              <div className="w-25 mr-3"><Button className="w-100" variant="outline-secondary">Cancel</Button></div>
              <div className="w-25"><Button className="w-100" variant="primary">Add collaborator</Button></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);
export default AddCollaborator;
