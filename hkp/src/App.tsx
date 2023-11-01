import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";
import Frame from "./pages/Frame";
import DonationWindow from "./pages/DonationWindow";
import VolunteerDeatils from "./pages/VolunteerDeatils";
import CommunityMemberForm from "./pages/CommunityMemberForm";
import AvatarSelection from "./pages/AvatarSelection";
import CommunityPage1 from "./pages/CommunityPage1";
import AvatarSelection1 from "./pages/AvatarSelection1";
import ProfileSelection from "./pages/ProfileSelection";
import Screen3 from "./pages/Screen3";
import Register from "./pages/Register";
import LOGIN from "./pages/LOGIN";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4025":
        title = "";
        metaDescription = "";
        break;
      case "/donation-window":
        title = "";
        metaDescription = "";
        break;
      case "/volunteer-deatils":
        title = "";
        metaDescription = "";
        break;
      case "/community-member-form":
        title = "";
        metaDescription = "";
        break;
      case "/avatar-selection":
        title = "";
        metaDescription = "";
        break;
      case "/community-page":
        title = "";
        metaDescription = "";
        break;
      case "/avatar-selection1":
        title = "";
        metaDescription = "";
        break;
      case "/profile-selection":
        title = "";
        metaDescription = "";
        break;
      case "/screen-3":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CommunityPage />} />
      <Route path="/frame-4025" element={<Frame />} />
      <Route path="/donation-window" element={<DonationWindow />} />
      <Route path="/volunteer-deatils" element={<VolunteerDeatils />} />
      <Route path="/community-member-form" element={<CommunityMemberForm />} />
      <Route path="/avatar-selection" element={<AvatarSelection />} />
      <Route path="/community-page" element={<CommunityPage1 />} />
      <Route path="/avatar-selection1" element={<AvatarSelection1 />} />
      <Route path="/profile-selection" element={<ProfileSelection />} />
      <Route path="/screen-3" element={<Screen3 />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LOGIN />} />
    </Routes>
  );
}
export default App;
