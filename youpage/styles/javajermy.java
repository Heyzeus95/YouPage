public class Hello {
    public static void main(String[] args){
        System.out.println("Hello World");
        Hello Hello = new Hello();
        String result = Hello.manipulateData("DeMarcus", 20);
        System.out.println(result);
      }
    private String manipulateData(String name, Integer number) {
       //string only allows letters, no numbers.
        String Person = name;
        String Age = number.toString();
        String concact = Person + "' age is: " + Age;
        Hello Hello = new Hello();
        Integer result = Hello.doMath(number, "equation");
        System.out.printIn(result);
        return concact;
    }
    private Integer doMath(Integer age, String equation) throws Exception{
        System.out.println("Inside doMath");
        try{
            if(equation == "equation1"){
                Integer equation1 = (12 * age);
                System.out.println("Retrieved equation1");
                return equation1;
            }
                if(equation == "equation2"){
                    Integer equation2 = (12 + age);
                    System.out.println("Retrieved equation2");
                    return equation2;
                }
            }
            catch(Exception e){
                System.out.println(e);
            }
            return 0;
        }
}
  
