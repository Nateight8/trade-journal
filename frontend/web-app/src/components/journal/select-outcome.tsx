import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { UpdateJournalSchema } from "./update-journal";
import { z } from "zod";

export default function SelectOutcome({
  form,
}: {
  form: UseFormReturn<z.infer<typeof UpdateJournalSchema>>;
}) {
  return (
    <>
      <FormField
        control={form.control}
        name="outcome"
        render={({ field }) => (
          <FormItem className="">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-3 gap-3"
              >
                <FormItem>
                  <FormControl>
                    {/* PROFIT */}
                    <div className="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]">
                      <RadioGroupItem
                        id="profit"
                        value="WON"
                        className="sr-only"
                      />
                      <TradeIcon size={36} className="text-green-500" />
                      <label
                        htmlFor="profit"
                        className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
                      >
                        Profit
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormControl>
                    {/* LOSS */}
                    <div className="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]">
                      <RadioGroupItem
                        id="loss"
                        value="LOST"
                        className="sr-only"
                      />
                      <TradeLoss size={36} className="text-red-500" />
                      <label
                        htmlFor="loss"
                        className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
                      >
                        Loss
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormControl>
                    {/* BREAK EVEN */}
                    <div className="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]">
                      <RadioGroupItem
                        id="break-even"
                        value="BREAKEVEN"
                        className="sr-only"
                      />
                      <TradeBreakeven size={36} className="text-yellow-500" />
                      <label
                        htmlFor="break-even"
                        className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
                      >
                        Break Even
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
interface IconProps {
  size?: number;
  className?: string;
}

export function TradeIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5.0 -10.0 110.0 135.0"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="m11.457 33.332c0-7.4766 6.0625-13.539 13.543-13.539 1.7266 0 3.125-1.4023 3.125-3.125 0-1.7266-1.3984-3.125-3.125-3.125-10.93 0-19.793 8.8594-19.793 19.789v16.902c0 7.6562 0 13.723 0.64062 18.469 0.65625 4.8867 2.0391 8.8398 5.1562 11.957 3.1211 3.1211 7.0742 4.5039 11.957 5.1602 4.75 0.63672 10.812 0.63672 18.469 0.63672h33.57c10.93 0 19.793-8.8594 19.793-19.789 0-1.7266-1.4023-3.125-3.125-3.125-1.7266 0-3.125 1.3984-3.125 3.125 0 7.4766-6.0625 13.539-13.543 13.539h-33.332c-7.9453 0-13.59-0.003906-17.871-0.58203-4.1953-0.5625-6.6094-1.6211-8.3711-3.3828-1.7656-1.7617-2.8203-4.1797-3.3867-8.3711-0.57422-4.2812-0.58203-9.9258-0.58203-17.871z" />
      <path d="m35.875 64.316c-1 1.4062-2.9531 1.7305-4.3594 0.72656-1.4023-1.0039-1.7266-2.9531-0.72656-4.3594l7.2422-10.137c2.7617-3.8672 8.1641-4.7031 11.965-1.8516 0.92578 0.69531 2.2344 0.55859 2.9961-0.3125l6.7891-7.7578h-3.5312c-1.7266 0-3.125-1.3984-3.125-3.125s1.3984-3.125 3.125-3.125h10.418c1.7227 0 3.125 1.3984 3.125 3.125v10.418c0 1.7227-1.4023 3.125-3.125 3.125-1.7266 0-3.125-1.4023-3.125-3.125v-2.1016l-5.8477 6.6797c-2.9141 3.332-7.9062 3.8555-11.449 1.1992-0.99219-0.74609-2.4062-0.52734-3.1289 0.48438z" />
    </svg>
  );
}

export function TradeLoss({ size = 24, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5.0 -10.0 110.0 135.0"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="m11.457 33.332c0-7.4766 6.0625-13.539 13.543-13.539 1.7266 0 3.125-1.4023 3.125-3.125 0-1.7266-1.3984-3.125-3.125-3.125-10.93 0-19.793 8.8594-19.793 19.789v16.902c0 7.6562 0 13.723 0.64062 18.469 0.65625 4.8867 2.0391 8.8398 5.1562 11.957 3.1211 3.1211 7.0742 4.5039 11.957 5.1602 4.75 0.63672 10.812 0.63672 18.469 0.63672h33.57c10.93 0 19.793-8.8594 19.793-19.789 0-1.7266-1.4023-3.125-3.125-3.125-1.7266 0-3.125 1.3984-3.125 3.125 0 7.4766-6.0625 13.539-13.543 13.539h-33.332c-7.9453 0-13.59-0.003906-17.871-0.58203-4.1953-0.5625-6.6094-1.6211-8.3711-3.3828-1.7656-1.7617-2.8203-4.1797-3.3867-8.3711-0.57422-4.2812-0.58203-9.9258-0.58203-17.871z" />
      <path d="m35.875 35.684c-1-1.4062-2.9531-1.7305-4.3594-0.72656-1.4023 1.0039-1.7266 2.9531-0.72656 4.3594l7.2422 10.137c2.7617 3.8672 8.1641 4.7031 11.965 1.8516 0.92578-0.69531 2.2344-0.55859 2.9961 0.3125l6.7891 7.7578h-3.5312c-1.7266 0-3.125 1.3984-3.125 3.125s1.3984 3.125 3.125 3.125h10.418c1.7227 0 3.125-1.3984 3.125-3.125v-10.418c0-1.7227-1.4023-3.125-3.125-3.125-1.7266 0-3.125 1.4023-3.125 3.125v2.1016l-5.8477-6.6797c-2.9141-3.332-7.9062-3.8555-11.449-1.1992-0.99219 0.74609-2.4062 0.52734-3.1289-0.48438z" />
    </svg>
  );
}

export function TradeBreakeven({ size = 24, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5.0 -10.0 110.0 135.0"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="m22.5 56.035h-17.5c-0.80078 0-1.4648 0.66406-1.4648 1.4648v1.25c0 5.625 4.5898 10.215 10.215 10.215s10.215-4.5898 10.215-10.215v-1.25c0-0.80078-0.66406-1.4648-1.4648-1.4648zm-8.75 10c-3.9453 0-7.168-3.1445-7.2852-7.0703h14.57c-0.11719 3.9258-3.3398 7.0703-7.2852 7.0703zm81.25-10h-17.5c-0.80078 0-1.4648 0.66406-1.4648 1.4648v1.25c0 5.625 4.5898 10.215 10.215 10.215s10.215-4.5898 10.215-10.215v-1.25c0-0.80078-0.66406-1.4648-1.4648-1.4648zm-8.75 10c-3.9453 0-7.168-3.1445-7.2852-7.0703h14.57c-0.11719 3.9258-3.3398 7.0703-7.2852 7.0703zm-5.7422-22.285h11.484c0.27344 0 0.50781 0.21484 0.50781 0.50781v3.9844c0 0.27344-0.21484 0.50781-0.50781 0.50781h-11.504c-0.27344 0-0.50781-0.21484-0.50781-0.50781v-4.0039c0.019531-0.27344 0.23438-0.48828 0.52734-0.48828zm-64.258-3.2422v2.7539c0 0.27344 0.21484 0.50781 0.50781 0.50781h2.7539c0.27344 0 0.50781 0.21484 0.50781 0.50781v3.9648c0 0.27344-0.21484 0.50781-0.50781 0.50781h-2.7539c-0.27344 0-0.50781 0.21484-0.50781 0.50781v2.7539c0 0.27344-0.21484 0.50781-0.50781 0.50781h-3.9844c-0.27344 0-0.50781-0.21484-0.50781-0.50781v-2.7539c0-0.27344-0.21484-0.50781-0.50781-0.50781h-2.7344c-0.27344 0-0.50781-0.21484-0.50781-0.50781v-4.0039c0-0.27344 0.21484-0.50781 0.50781-0.50781h2.7344c0.27344 0 0.50781-0.21484 0.50781-0.50781v-2.7539c0-0.27344 0.21484-0.50781 0.50781-0.50781h4.0039c0.27344 0.039062 0.48828 0.25391 0.48828 0.54687zm36.25-8.0078c0 1.3867-1.1133 2.5-2.5 2.5s-2.5-1.1133-2.5-2.5 1.1133-2.5 2.5-2.5 2.5 1.1133 2.5 2.5zm37.5-3.9648h-31.953c-0.85938-1.7383-2.2461-3.1445-3.9648-4.0234 0.72266-0.89844 1.1523-2.0312 1.1523-3.2617 0-2.6562-2.0312-7.7148-5.2148-7.7148-3.1836 0-5.2148 5.0586-5.2148 7.7148 0 1.2305 0.42969 2.3633 1.1523 3.2617-1.7188 0.87891-3.125 2.2852-3.9648 4.0234h-31.992c-0.80078 0-1.4648 0.66406-1.4648 1.4648v5c0 0.80078 0.66406 1.4648 1.4648 1.4648h31.953c0.87891 1.7578 2.3047 3.2031 4.082 4.082v35.488h-8.5352c-3.5742 0-6.4648 2.8906-6.4648 6.4648v2.5c0 0.80078 0.66406 1.4648 1.4648 1.4648h35c0.80078 0 1.4648-0.66406 1.4648-1.4648v-2.5c0-3.5742-2.8906-6.4648-6.4648-6.4648h-8.5352v-35.488c1.7578-0.87891 3.2031-2.3047 4.082-4.082h31.953c0.80078 0 1.4648-0.66406 1.4648-1.4648v-5c0-0.80078-0.66406-1.4648-1.4648-1.4648zm-52.461 5h-26.074v-2.0703h26.074c-0.019531 0.33203-0.039062 0.68359-0.039062 1.0352s0.019531 0.70312 0.039062 1.0352zm12.461-17.07c0.68359 0 2.2852 2.832 2.2852 4.7852 0 1.2695-1.0156 2.2852-2.2852 2.2852s-2.2852-1.0156-2.2852-2.2852c0-1.9531 1.6016-4.7852 2.2852-4.7852zm12.5 62.5c1.9531 0 3.5352 1.582 3.5352 3.5352v1.0352h-32.07v-1.0352c0-1.9531 1.582-3.5352 3.5352-3.5352zm-13.535-6.4648v-27.539c0.33203 0.019531 0.68359 0.039062 1.0352 0.039062s0.70312-0.019531 1.0352-0.039062v27.539zm1.0352-33.965c-3.3203 0-6.0352-2.7148-6.0352-6.0352s2.7148-6.0352 6.0352-6.0352 6.0352 2.7148 6.0352 6.0352-2.7148 6.0352-6.0352 6.0352zm38.535-5h-26.074c0.019531-0.33203 0.039062-0.68359 0.039062-1.0352s-0.019531-0.70312-0.039062-1.0352h26.074z" />
    </svg>
  );
}
