import RoomDetailPage, { generateRoomMetadata } from "../RoomDetailPage";

export function generateMetadata(props) {
  return generateRoomMetadata({ ...props, roomKey: "economy" });
}

export default function EconomyRoomPage(props) {
  return <RoomDetailPage {...props} roomKey="economy" />;
}
