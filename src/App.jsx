import Footer from "./components/Footer";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 px-4 pt-4 text-white font-bodyFont bg-gradient-to-t from-sky-600 via-sky-400 to-sky-300">
      <div className="w-[850px] h-full bg-bodyColor p-10 flex flex-col gap-1">
        <InputForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
