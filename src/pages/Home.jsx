import { useEffect } from "react";
import HeadLines from "../components/home/headlines";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <HeadLines />
    </div>
  );
}
