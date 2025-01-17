import {Input} from "@/components/ui/input.tsx";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <h1 className="text-6xl font-medium ">Never miss <br/> an update</h1>
          <p>Subscribe to newsletter</p>
          <div></div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;