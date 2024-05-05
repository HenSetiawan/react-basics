'use client'
function UserItem() {
  return (
    <div>
      <div className="border flex items-center gap-1 p-2 rounded-xl">
        <div className="w-8 flex items-center justify-center h-8 rounded-full bg-emerald-500">
            <p className="text-white">HS</p>
        </div>
        <div>
          <p className="font-bold">Hendy S</p>
          <p className="text-[12px]">hendystyawan74@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default UserItem