import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Organ } from '@/lib/organ-data';

interface OrganModalProps {
  organ: Organ | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrganModal({ 
  organ, 
  open, 
  onOpenChange 
}: OrganModalProps) {
  if (!organ) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <span>{organ.name}</span>
            <span className="ml-2 text-sm text-muted-foreground">
              {organ.oceanMetaphor.frenchTitle}
            </span>
          </DialogTitle>
          <DialogDescription>
            {organ.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4 text-primary">
          <div>
            <h3 className="font-semibold text-lg text-black">Fonction</h3>
            <p className='text-black'>{organ.function}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-black">Location</h3>
            <p className='text-black'>{organ.location}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-black">Faits amusants</h3>
            <ul className="list-disc list-inside space-y-2">
              {organ.funFacts.map((fact, index) => (
                <li key={index} className="text-sm text-black">
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg text-black">Métaphore de l'océan</h3>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-800">
                {organ.oceanMetaphor.oceanConnection}
              </h4>
              <p className="text-sm text-blue-700 italic">
                {organ.oceanMetaphor.marineSimilarity}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}