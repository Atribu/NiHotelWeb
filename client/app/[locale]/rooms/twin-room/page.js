import RoomDetailPage, { generateRoomMetadata } from "../RoomDetailPage";

export function generateMetadata(props) {
  return generateRoomMetadata({ ...props, roomKey: "twin" });
}

export default function TwinRoomPage(props) {
  return <RoomDetailPage {...props} roomKey="twin" />;
}
