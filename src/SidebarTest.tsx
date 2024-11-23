import Sidebar from "@/components/Sidebar.tsx"

export default function SidebarTest() {
  return (
    <div className="w-full p-2 h-[100dvh]">
      <div className="w-full h-full relative p-2 text-start flex gap-2 items-center rounded-[15px] justify-center bg-[#fdebe5]">
        <div className="w-full flex items-center justify-center text-center h-full bg-white rounded-[15px]">
          <span>Main content</span>
        </div>

        <Sidebar page={"home" as const} />
      </div>
    </div>
  )
}
