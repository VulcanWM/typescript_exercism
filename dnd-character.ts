const abilities: Array<string> = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
  
export class DnDCharacter {
  constitution: number = DnDCharacter.generateAbilityScore()
  strength: number = DnDCharacter.generateAbilityScore()
  dexterity: number = DnDCharacter.generateAbilityScore()
  intelligence: number = DnDCharacter.generateAbilityScore()
  wisdom: number = DnDCharacter.generateAbilityScore()
  charisma: number = DnDCharacter.generateAbilityScore()
  hitpoints:number = 10 + DnDCharacter.getModifierFor(this.constitution)
  
  public static generateAbilityScore(): number {
    var dice_nums: Array<number> = [Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)]
    dice_nums = dice_nums.sort().filter((_,i) => i)
    let dice_sum:number = dice_nums.reduce((a, b) => a + b, 0)
    return dice_sum
  }
  
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10)/2)
  }
}
