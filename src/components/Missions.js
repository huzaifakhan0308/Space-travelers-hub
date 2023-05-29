import React, { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions.list);
  const dispatch = useDispatch();
  return (
    <Container className="mt-3">
      <Table
        striped
        bordered
        hover
        variant="dark"
        className=" border border-warning"
      >
        <thead>
          <tr>
            <th className="fs-4 text-warning">Mission</th>
            <th className="fs-4 text-warning">Description</th>
            <th className="fs-4 text-warning">Status</th>
            <th className=" text-dark">.</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission-name fw-bold ">{mission.mission_name}</td>
              <td className="mission-description">{mission.description}</td>
              <td className="mission-status">
                {mission.reserved ? (
                  <Button variant="success" className="active-member-btn">
                    Active Member
                  </Button>
                ) : (
                  <Button variant="secondary">NOT A MEMBER</Button>
                )}
              </td>
              <td className="mission-join-leave">
                {mission.reserved ? (
                  <Button
                    variant="outline-warning"
                    onClick={() => dispatch(leaveMission(mission.mission_id))}
                  >
                    Leave Mission
                  </Button>
                ) : (
                  <Button
                    variant="warning"
                    onClick={() => dispatch(joinMission(mission.mission_id))}
                  >
                    Join Mission
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
