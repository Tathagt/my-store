import HomePage from "@/components/HomePage";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
  <main>
    <HomePage/>
    <Wrapper>
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div>Heading</div>
        <div>Paragraph</div>
      </div>
    </Wrapper>
  </main>
  );
}