import RoomDetailPage, { generateRoomMetadata } from "../RoomDetailPage";

export function generateMetadata(props) {
  return generateRoomMetadata({ ...props, roomKey: "triple" });
}

export default function TripleRoomPage(props) {
  return <RoomDetailPage {...props} roomKey="triple" />;
}
