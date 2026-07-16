import RoomDetailPage, { generateRoomMetadata } from "../RoomDetailPage";

export async function generateMetadata(props) {
  return generateRoomMetadata({ ...props, roomKey: "suite" });
}

export default function SuiteRoomPage(props) {
  return <RoomDetailPage {...props} roomKey="suite" />;
}
