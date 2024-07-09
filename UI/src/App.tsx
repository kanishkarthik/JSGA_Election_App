import { Routes, Route } from 'react-router-dom';
import ManageStudents from './components/ManageStudents';
import HeadBoy from './components/HeadBoy';
import HeadGirl from './components/HeadGirl';
import './App.css';
import Layout from './components/core/Layout';
import Sports from './components/Sports';
import CulturalSecretary from './components/CulturalSecretary';
import Tulip from './components/Tulip';
import Iris from './components/Iris';
import Orchid from './components/Orchid';
import Daffodils from './components/Daffodils';
import Home from './components/Home';
import { AppProvider } from './context/AppContext';
const App = () => {

  return (
    <>
      <AppProvider>
        <Layout>
          <Routes>
            <Route
              path="/school-election/manage-students"
              element={<ManageStudents />}
            />
            <Route path="/school-election/head-boy" element={<HeadBoy />} />
            <Route path="/school-election/head-girl" element={<HeadGirl />} />
            <Route path="/school-election/sports" element={<Sports />} />
            <Route path="/school-election/culture" element={<CulturalSecretary />} />
            <Route path="/school-election/tulip" element={<Tulip />} />
            <Route path="/school-election/iris" element={<Iris />} />
            <Route path="/school-election/orchid" element={<Orchid />} />
            <Route path="/school-election/daffodils" element={<Daffodils />} />
            <Route path="/school-election" element={<Home />} />
          </Routes>
        </Layout>
      </AppProvider>
    </>

  );
};

export default App;
