import RoomDetailPage, { generateRoomMetadata } from "../RoomDetailPage";

export async function generateMetadata(props) {
  return generateRoomMetadata({ ...props, roomKey: "standard" });
}

export default function StandardRoomPage(props) {
  return <RoomDetailPage {...props} roomKey="standard" />;
}
