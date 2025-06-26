import CommissionsTab from "./components/CommissionsTab";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <CommissionsTab />
        </div>
      </div>
    </div>
  );
}

export default App;
