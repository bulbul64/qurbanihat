import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { SlidersHorizontal } from 'lucide-react';

const AddShortByPrice = ({ setSortOrder }: { setSortOrder: (value: string) => void;}) => {

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);
  };

  return (
    <div className="w-full max-w-xs space-y-2">

      {/* LABEL */}
      <Label htmlFor="sort" className="flex items-center gap-2 text-sm font-medium">
        <SlidersHorizontal size={16} />
        Sort by Price
      </Label>

      {/* SELECT */}
      <Select onValueChange={handleSortOrderChange}  defaultValue="low" required>

        <SelectTrigger id="sort" className="w-full rounded-xl border-muted shadow-sm focus:ring-2 focus:ring-emerald-500">
          <SelectValue placeholder="Select price order" />
        </SelectTrigger>

        <SelectContent  className="rounded-xl overflow-hidden">
          <SelectItem value="low">Low → High</SelectItem>
          <SelectItem value="high">High → Low</SelectItem>
        </SelectContent>

      </Select>

    </div>
  );
};

export default AddShortByPrice;