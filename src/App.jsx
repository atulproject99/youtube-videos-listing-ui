import { useEffect, useState } from "react";
import "./App.css";
import PaginationComponent from "./PaginationComponent";
import VideoGrid from "./VideoGrid";
import ApiService from "./service/api-service";

function App() {
  const [pageState, setPageState] = useState("initial");
  const [data, setData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  async function fetchData() {
    setPageState("loading");
    const data = await ApiService.get("/public/youtube/videos", {
      page: pageNo,
      limit: 8,
    });
    if (data.value) {
      setPageState("loaded");
      setData(data.value.data);
      /// Loaded
    } else {
      setPageState("error");
      /// Error state
    }
  }
  function onDecrement() {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  }
  function onIncrement() {
    if (pageNo < data.totalPages) {
      setPageNo(pageNo + 1);
    }
  }
  useEffect(() => {
    fetchData();
    return () => {
      /// clean up
    };
  }, [pageNo]);

  return (
    <>
      <div className="video-container">
        <h2>Youtube video listing ui</h2>{" "}
        {pageState === "initial" ? (
          <h1>Intital state</h1>
        ) : pageState === "error" ? (
          <h1>Error while api calling</h1>
        ) : pageState === "loading" ? (
          <h1>Loading...</h1>
        ) : (
          <VideoGrid videoData={data.data} />
        )}
        <PaginationComponent
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          pageNo={pageNo}
        />
      </div>
    </>
  );
}

export default App;
