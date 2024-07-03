import { Routes, Route } from 'react-router-dom';
import ManageStudents from './components/ManageStudents';
import HeadBoy from './components/HeadBoy';
import HeadGirl from './components/HeadGirl';
import './App.css';
import Layout from './components/core/Layout';

const App = () => {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/manage-students"
            element={<ManageStudents/>}
          />
          <Route path="/head-boy" element={<HeadBoy/>} />
          <Route path="/head-girl" element={<HeadGirl/>} />
        </Routes>
      </Layout>
    </>

  );
};

export default App;
