import RoomDetailPage, { generateRoomMetadata } from "../RoomDetailPage";

export function generateMetadata(props) {
  return generateRoomMetadata({ ...props, roomKey: "french" });
}

export default function FrenchRoomPage(props) {
  return <RoomDetailPage {...props} roomKey="french" />;
}
