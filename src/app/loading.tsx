import { Loading as LoadingComponent } from '@/components/molecules/loading';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient1">
      <div className="w-[160px] h-[160px] rounded-[12px] shadow-thumb bg-white">
        <LoadingComponent />
      </div>
    </div>
  );
}
