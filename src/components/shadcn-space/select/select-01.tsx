
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { SlidersHorizontal } from 'lucide-react';

const AddShortByPrice = ({ setSortOrder }: { setSortOrder: (value: string) => void }) => {
  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);
  };

  return (
    <div className="w-full max-w-xs space-y-2">
     

      {/* SELECT */}
      <Select onValueChange={handleSortOrderChange} defaultValue="default" required>
        <SelectTrigger
          id="sort"
          className="w-full rounded-xl border-muted shadow-sm focus:ring-2 focus:ring-emerald-500"
        >
          <SelectValue placeholder="Select price order" />
        </SelectTrigger>

        <SelectContent className="rounded-xl overflow-hidden">
          <SelectItem value="default" disabled>
         <SlidersHorizontal size={16} />   Sort by price
          </SelectItem>
          <SelectItem value="low">Low → High</SelectItem>
          <SelectItem value="high">High → Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AddShortByPrice;
